package com.weige.edu.service;

import com.weige.edu.dao.data.FansDO;
import com.weige.edu.dao.data.view.FansView;

import java.util.List;


/**
 * 
 * @comment fans Service
 * @author zhaoshuai
 * @date 2018-01-25 11:03:31
 * @qq 122331175
 * @version 1.0
 */
public interface FansService {
	/**
     * 添加fans
     * @param fans View
     * @return
     */
    public int add(FansView fansView);

    /**
     *  更新fans（无条件）
     * @param fans View
     * @return
     */
    public int update(FansView fansView);

    /**
     *  更新fans（有条件）
     * @param fans View
     * @return
     */
    public int updateBySelective(FansView fansView);

    /**
     *  删除fans
     * @param uuid
     * @return
     */
    public int delete(String[] uuid);

    /**
     *  查询fans（根据ID）
     * @param uuid
     * @return
     */
    public FansDO queryById(String uuid);

    /**
     * 查询fans总数（有条件）
     * @param fans View
     * @return count
     */
    public Integer queryByCount(FansView fansView);

    /**
     * 查询fans信息列表（有条件）
     * @param fans DO
     * @return List<FansDO>
     */
    public List<FansDO> queryByList(FansDO fansDO);
    
    /**
     * 查询fans不分页信息列表（有条件）
     * @param fans DO
     * @return List<FansDO>
     */
    public List<FansDO> queryByListNoPage(FansDO fansDO, String params, String order);
}
