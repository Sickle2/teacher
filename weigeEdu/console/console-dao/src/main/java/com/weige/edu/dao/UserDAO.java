package com.weige.edu.dao;

import com.weige.edu.dao.data.UserDO;

import java.util.List;

/**
 * 
 * @comment Users and global privileges Dao
 * @author zhaoshuai
 * @date 2018-01-25 11:03:31
 * @qq 122331175
 * @version 1.0
 */
public interface UserDAO {
	/**
     * 添加Users and global privileges
     * @param Users and global privileges DO
     * @return
     */
    public int add(UserDO userDO);

    /**
     *  更新Users and global privileges（无条件）
     * @param Users and global privileges DO
     * @return
     */
    public int update(UserDO userDO);

    /**
     *  更新Users and global privileges（有条件）
     * @param Users and global privileges DO
     * @return
     */
    public int updateBySelective(UserDO userDO);

    /**
     *  删除Users and global privileges
     * @param uuid
     * @return
     */
    public int delete(String[] uuid);

    /**
     *  查询Users and global privileges（根据ID）
     * @param uuid
     * @return
     */
    public UserDO queryById(String uuid);

    /**
     * 查询Users and global privileges总数（有条件）
     * @param Users and global privileges DO
     * @return count
     */
    public Integer queryByCount(UserDO userDO);

    /**
     * 查询Users and global privileges信息列表（有条件）（待分页）
     * @param Users and global privileges DO
     * @return List<UserDO>
     */
    public List<UserDO> queryByList(UserDO userDO);
    
    /**
     * 查询Users and global privileges信息列表（有条件）（无分页）
     * @param Users and global privileges DO
     * @return List<UserDO>
     */
    public List<UserDO> queryByListNoPage(UserDO userDO);
}
