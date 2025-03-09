<?php declare(strict_types=1);

/**
 * ownCloud - Music app
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Pauli Järvinen <pauli.jarvinen@gmail.com>
 * @copyright Pauli Järvinen 2021 - 2024
 */

namespace OCA\Music\Db;

use OCP\IConfig;
use OCP\IDBConnection;

/**
 * Type hint a base class method to help Scrutinizer
 * @method PodcastEpisode updateOrInsert(PodcastEpisode $episode)
 * @phpstan-extends BaseMapper<PodcastEpisode>
 */
class PodcastEpisodeMapper extends BaseMapper {
	public function __construct(IDBConnection $db, IConfig $config) {
		parent::__construct($db, $config, 'music_podcast_episodes', PodcastEpisode::class, 'title', 'channel_id');
	}

	/**
	 * @param int[] $channelIds
	 * @return PodcastEpisode[]
	 */
	public function findAllByChannel(array $channelIds, string $userId, ?int $limit=null, ?int $offset=null) : array {
		$channelCount = \count($channelIds);
		if ($channelCount === 0) {
			return [];
		} else {
			$condition = '`channel_id` IN ' . $this->questionMarks($channelCount);
			$sorting = 'ORDER BY `id` DESC';
			$sql = $this->selectUserEntities($condition, $sorting);
			return $this->findEntities($sql, \array_merge([$userId], $channelIds), $limit, $offset);
		}
	}

	public function deleteByChannel(int $channelId, string $userId) : void {
		$this->deleteByCond('`channel_id` = ? AND `user_id` = ?', [$channelId, $userId]);
	}

	public function deleteByChannelExcluding(int $channelId, array $excludedIds, string $userId) : void {
		$excludeCount = \count($excludedIds);
		if ($excludeCount === 0) {
			$this->deleteByChannel($channelId, $userId);
		} else {
			$this->deleteByCond(
				'`channel_id` = ? AND `user_id` = ? AND `id` NOT IN ' . $this->questionMarks($excludeCount),
				\array_merge([$channelId, $userId], $excludedIds)
			);
		}
	}

	/**
	 * Overridden from the base implementation to provide support for table-specific rules
	 *
	 * {@inheritdoc}
	 * @see BaseMapper::advFormatSqlCondition()
	 */
	protected function advFormatSqlCondition(string $rule, string $sqlOp, string $conv) : string {
		switch ($rule) {
			case 'podcast':	return "`channel_id` IN (SELECT `id` FROM `*PREFIX*music_podcast_channels` `c` WHERE $conv(`c`.`title`) $sqlOp $conv(?))";
			case 'time':	return "`duration` $sqlOp ?";
			case 'pubdate':	return "`published` $sqlOp ?";
			default:		return parent::advFormatSqlCondition($rule, $sqlOp, $conv);
		}
	}

	/**
	 * @see \OCA\Music\Db\BaseMapper::findUniqueEntity()
	 * @param PodcastEpisode $episode
	 * @return PodcastEpisode
	 */
	protected function findUniqueEntity(Entity $episode) : Entity {
		assert($episode instanceof PodcastEpisode);
		$sql = $this->selectUserEntities("`guid_hash` = ? AND `channel_id` = ?");
		return $this->findEntity($sql, [$episode->getUserId(), $episode->getGuidHash(), $episode->getChannelId()]);
	}
}
