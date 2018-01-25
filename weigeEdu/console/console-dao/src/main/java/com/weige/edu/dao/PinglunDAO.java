package com.weige.edu.dao;

import com.weige.edu.dao.data.PinglunDO;

import java.util.List;

/**
 * 
 * @comment pinglun Dao
 * @author zhaoshuai
 * @date 2018-01-25 11:03:33
 * @qq 122331175
 * @version 1.0
 */
public interface PinglunDAO {
	/**
     * 添加pinglun
     * @param pinglun DO
     * @return
     */
    public int add(PinglunDO pinglunDO);

    /**
     *  更新pinglun（无条件）
     * @param pinglun DO
     * @return
     */
    public int update(PinglunDO pinglunDO);

    /**
     *  更新pinglun（有条件）
     * @param pinglun DO
     * @return
     */
    public int updateBySelective(PinglunDO pinglunDO);

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
     * @param pinglun DO
     * @return count
     */
    public Integer queryByCount(PinglunDO pinglunDO);

    /**
     * 查询pinglun信息列表（有条件）（待分页）
     * @param pinglun DO
     * @return List<PinglunDO>
     */
    public List<PinglunDO> queryByList(PinglunDO pinglunDO);
    
    /**
     * 查询pinglun信息列表（有条件）（无分页）
     * @param pinglun DO
     * @return List<PinglunDO>
     */
    public List<PinglunDO> queryByListNoPage(PinglunDO pinglunDO);
}
