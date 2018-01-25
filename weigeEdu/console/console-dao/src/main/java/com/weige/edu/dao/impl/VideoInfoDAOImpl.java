package com.weige.edu.dao.impl;

import java.util.List;

import com.weige.edu.dao.VideoInfoDAO;
import com.weige.edu.dao.data.VideoInfoDO;
import org.mybatis.spring.support.SqlSessionDaoSupport;
/**
 * 
 * @comment video_info DaoImpl
 * @author zhaoshuai
 * @date 2018-01-25 11:03:35
 * @qq 122331175
 * @version 1.0
 */
public class VideoInfoDAOImpl extends SqlSessionDaoSupport implements VideoInfoDAO {
	/**
     * 添加video_info
     * @param video_info DO
     * @return
     */
    public int add(VideoInfoDO videoInfoDO){
    	return this.getSqlSession().insert("com.liujinxin.dao.dao.VideoInfoDAO.add", videoInfoDO);
    }

    /**
     *  更新video_info（无条件）
     * @param video_info DO
     * @return
     */
    public int update(VideoInfoDO videoInfoDO){
    	return this.getSqlSession().update("com.liujinxin.dao.dao.VideoInfoDAO.update", videoInfoDO);
    }

    /**
     *  更新video_info（有条件）
     * @param video_info DO
     * @return
     */
    public int updateBySelective(VideoInfoDO videoInfoDO){
    	 return this.getSqlSession().update("com.liujinxin.dao.dao.VideoInfoDAO.updateBySelective",videoInfoDO);
    }

    /**
     *  删除video_info
     * @param uuid
     * @return
     */
    public int delete(String[] uuid){
    	return this.getSqlSession().delete("com.liujinxin.dao.dao.VideoInfoDAO.delete", uuid);
    }

    /**
     *  查询video_info（根据ID）
     * @param uuid
     * @return
     */
    public VideoInfoDO queryById(String uuid){
    	return this.getSqlSession().selectOne("com.liujinxin.dao.dao.VideoInfoDAO.queryById", uuid);
    }

    /**
     * 查询video_info总数（有条件）
     * @param video_info DO
     * @return count
     */
    public Integer queryByCount(VideoInfoDO videoInfoDO){
    	return this.getSqlSession().selectOne("com.liujinxin.dao.dao.VideoInfoDAO.queryByCount", videoInfoDO);
    }

    /**
     * 查询video_info信息列表（有条件）（待分页）
     * @param video_info DO
     * @return List<VideoInfoDO>
     */
    public List<VideoInfoDO> queryByList(VideoInfoDO videoInfoDO){
        List<VideoInfoDO>  videoInfoList = getSqlSession().selectList("com.liujinxin.dao.dao.VideoInfoDAO.queryByList",videoInfoDO);
        return (List<VideoInfoDO>)videoInfoList;
    }
    
     /**
     * 查询video_info信息列表（有条件）（无分页）（注：业务代码不要调用）
     * @param video_info DO
     * @return List<VideoInfoDO>
     */
    public List<VideoInfoDO> queryByListNoPage(VideoInfoDO videoInfoDO){
        List<VideoInfoDO>  videoInfoList = getSqlSession().selectList("com.liujinxin.dao.dao.VideoInfoDAO.queryByList",videoInfoDO);
        return videoInfoList;
    }
}
