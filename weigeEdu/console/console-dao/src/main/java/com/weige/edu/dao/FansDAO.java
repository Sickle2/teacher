package com.weige.edu.dao;

import com.weige.edu.dao.data.FansDO;

import java.util.List;

/**
 * 
 * @comment fans Dao
 * @author zhaoshuai
 * @date 2018-01-25 11:03:31
 * @qq 122331175
 * @version 1.0
 */
public interface FansDAO {
	/**
     * 添加fans
     * @param fans DO
     * @return
     */
    public int add(FansDO fansDO);

    /**
     *  更新fans（无条件）
     * @param fans DO
     * @return
     */
    public int update(FansDO fansDO);

    /**
     *  更新fans（有条件）
     * @param fans DO
     * @return
     */
    public int updateBySelective(FansDO fansDO);

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
     * @param fans DO
     * @return count
     */
    public Integer queryByCount(FansDO fansDO);

    /**
     * 查询fans信息列表（有条件）（待分页）
     * @param fans DO
     * @return List<FansDO>
     */
    public List<FansDO> queryByList(FansDO fansDO);
    
    /**
     * 查询fans信息列表（有条件）（无分页）
     * @param fans DO
     * @return List<FansDO>
     */
    public List<FansDO> queryByListNoPage(FansDO fansDO);
}
