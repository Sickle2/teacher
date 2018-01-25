package com.weige.edu.service.impl;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.weige.edu.dao.VideoInfoDAO;
import com.weige.edu.dao.data.VideoInfoDO;
import com.weige.edu.dao.data.view.VideoInfoView;
import com.weige.edu.service.VideoInfoService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 
 * @comment video_info ServiceImpl
* @author zhaoshuai
 * @date 2018-01-25 11:03:35
 * @qq 122331175
 * @version 1.0
 */
 @Component("videoInfoService")
public class VideoInfoServiceImpl implements VideoInfoService {
	@Autowired
    private VideoInfoDAO dao;
    
    /**
     * 添加video_info
     * @param video_info View
     * @return
     */
    public int add(VideoInfoView videoInfoView){
    	VideoInfoDO videoInfoDO = new VideoInfoDO();
        BeanUtils.copyProperties(videoInfoView,videoInfoDO);
                                return dao.add(videoInfoDO);
    }

    /**
     *  更新video_info（无条件）
     * @param video_info View
     * @return
     */
    public int update(VideoInfoView videoInfoView){
    	VideoInfoDO videoInfoDO = new VideoInfoDO();
        BeanUtils.copyProperties(videoInfoView,videoInfoDO);
        return dao.update(videoInfoDO);
    }

    /**
     *  更新video_info（有条件）
     * @param video_info View
     * @return
     */
    public int updateBySelective(VideoInfoView videoInfoView){
    	VideoInfoDO videoInfoDO = new VideoInfoDO();
        BeanUtils.copyProperties(videoInfoView,videoInfoDO);
        return dao.updateBySelective(videoInfoDO);
    }

    /**
     *  删除video_info
     * @param uuid
     * @return
     */
    public int delete(String[] uuid){
    	return dao.delete(uuid);
    }

    /**
     *  查询video_info（根据ID）
     * @param uuid
     * @return
     */
    public VideoInfoDO queryById(String uuid){
    	return dao.queryById(uuid);
    }

    /**
     * 查询video_info总数（有条件）
     * @param video_info View
     * @return count
     */
    public Integer queryByCount(VideoInfoView videoInfoView){
    	VideoInfoDO videoInfoDO = new VideoInfoDO();
        BeanUtils.copyProperties(videoInfoView,videoInfoDO);
        return dao.queryByCount(videoInfoDO);
    }

    /**
     * 查询video_info信息列表（有条件）
     * @param video_info DO
     * @return List<VideoInfoDO>
     */
    public List<VideoInfoDO> queryByList(VideoInfoDO videoInfoDO){
        return dao.queryByList(videoInfoDO);
    }
    
    /**
     * 查询video_info信息列表（有条件）
     * @param video_info DO
     * @return List<VideoInfoDO>
     */
    public List<VideoInfoDO> queryByListNoPage(VideoInfoDO videoInfoDO, String params, String order){
        return dao.queryByListNoPage(videoInfoDO);
    }
    
}
