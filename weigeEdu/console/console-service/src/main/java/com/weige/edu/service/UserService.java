package com.weige.edu.service;

import com.weige.edu.dao.data.UserDO;
import com.weige.edu.dao.data.view.UserView;

import java.util.List;


/**
 * 
 * @comment Users and global privileges Service
 * @author zhaoshuai
 * @date 2018-01-25 11:03:31
 * @qq 122331175
 * @version 1.0
 */
public interface UserService {
	/**
     * 添加Users and global privileges
     * @param Users and global privileges View
     * @return
     */
    public int add(UserView userView);

    /**
     *  更新Users and global privileges（无条件）
     * @param Users and global privileges View
     * @return
     */
    public int update(UserView userView);

    /**
     *  更新Users and global privileges（有条件）
     * @param Users and global privileges View
     * @return
     */
    public int updateBySelective(UserView userView);

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
     * @param Users and global privileges View
     * @return count
     */
    public Integer queryByCount(UserView userView);

    /**
     * 查询Users and global privileges信息列表（有条件）
     * @param Users and global privileges DO
     * @return List<UserDO>
     */
    public List<UserDO> queryByList(UserDO userDO);
    
    /**
     * 查询Users and global privileges不分页信息列表（有条件）
     * @param Users and global privileges DO
     * @return List<UserDO>
     */
    public List<UserDO> queryByListNoPage(UserDO userDO, String params, String order);
}
