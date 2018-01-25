package com.weige.edu.service;

import com.weige.edu.dao.data.PinglunDO;
import com.weige.edu.dao.data.view.PinglunView;

import java.util.List;

/**
 * 
 * @comment pinglun Service
 * @author zhaoshuai
 * @date 2018-01-25 11:03:33
 * @qq 122331175
 * @version 1.0
 */
public interface PinglunService {
	/**
     * 添加pinglun
     * @param pinglun View
     * @return
     */
    public int add(PinglunView pinglunView);

    /**
     *  更新pinglun（无条件）
     * @param pinglun View
     * @return
     */
    public int update(PinglunView pinglunView);

    /**
     *  更新pinglun（有条件）
     * @param pinglun View
     * @return
     */
    public int updateBySelective(PinglunView pinglunView);

    /**
     *  删除pinglun
     * @param uuid
     * @return
     */
    public int delete(String[] uuid);

    /**
     *  查询pinglun（根据ID）
     * @param uuid
     * @return
     */
    public PinglunDO queryById(String uuid);

    /**
     * 查询pinglun总数（有条件）
     * @param pinglun View
     * @return count
     */
    public Integer queryByCount(PinglunView pinglunView);

    /**
     * 查询pinglun信息列表（有条件）
     * @param pinglun DO
     * @return List<PinglunDO>
     */
    public List<PinglunDO> queryByList(PinglunDO pinglunDO);
    
    /**
     * 查询pinglun不分页信息列表（有条件）
     * @param pinglun DO
     * @return List<PinglunDO>
     */
    public List<PinglunDO> queryByListNoPage(PinglunDO pinglunDO, String params, String order);
}
