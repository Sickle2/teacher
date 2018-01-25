package com.weige.edu.service;

import com.weige.edu.dao.data.VideoInfoDO;
import com.weige.edu.dao.data.view.VideoInfoView;

import java.util.List;


/**
 * 
 * @comment video_info Service
 * @author zhaoshuai
 * @date 2018-01-25 11:03:35
 * @qq 122331175
 * @version 1.0
 */
public interface VideoInfoService {
	/**
     * 添加video_info
     * @param video_info View
     * @return
     */
    public int add(VideoInfoView videoInfoView);

    /**
     *  更新video_info（无条件）
     * @param video_info View
     * @return
     */
    public int update(VideoInfoView videoInfoView);

    /**
     *  更新video_info（有条件）
     * @param video_info View
     * @return
     */
    public int updateBySelective(VideoInfoView videoInfoView);

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
     * @param video_info View
     * @return count
     */
    public Integer queryByCount(VideoInfoView videoInfoView);

    /**
     * 查询video_info信息列表（有条件）
     * @param video_info DO
     * @return List<VideoInfoDO>
     */
    public List<VideoInfoDO> queryByList(VideoInfoDO videoInfoDO);
    
    /**
     * 查询video_info不分页信息列表（有条件）
     * @param video_info DO
     * @return List<VideoInfoDO>
     */
    public List<VideoInfoDO> queryByListNoPage(VideoInfoDO videoInfoDO, String params, String order);
}
