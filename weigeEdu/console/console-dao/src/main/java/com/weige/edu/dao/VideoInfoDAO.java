package com.weige.edu.dao;

import com.weige.edu.dao.data.VideoInfoDO;

import java.util.List;
/**
 * 
 * @comment video_info Dao
 * @author zhaoshuai
 * @date 2018-01-25 11:03:35
 * @qq 122331175
 * @version 1.0
 */
public interface VideoInfoDAO {
	/**
     * 添加video_info
     * @param video_info DO
     * @return
     */
    public int add(VideoInfoDO videoInfoDO);

    /**
     *  更新video_info（无条件）
     * @param video_info DO
     * @return
     */
    public int update(VideoInfoDO videoInfoDO);

    /**
     *  更新video_info（有条件）
     * @param video_info DO
     * @return
     */
    public int updateBySelective(VideoInfoDO videoInfoDO);

    /**
     *  删除video_info
     * @param uuid
     * @return
     */
    public int delete(String[] uuid);

    /**
     *  查询video_info（根据ID）
     * @param uuid
     * @return
     */
    public VideoInfoDO queryById(String uuid);

    /**
     * 查询video_info总数（有条件）
     * @param video_info DO
     * @return count
     */
    public Integer queryByCount(VideoInfoDO videoInfoDO);

    /**
     * 查询video_info信息列表（有条件）（待分页）
     * @param video_info DO
     * @return List<VideoInfoDO>
     */
    public List<VideoInfoDO> queryByList(VideoInfoDO videoInfoDO);
    
    /**
     * 查询video_info信息列表（有条件）（无分页）
     * @param video_info DO
     * @return List<VideoInfoDO>
     */
    public List<VideoInfoDO> queryByListNoPage(VideoInfoDO videoInfoDO);
}
