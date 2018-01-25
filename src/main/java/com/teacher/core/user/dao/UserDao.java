package com.teacher.core.user.dao;

import com.teacher.core.user.model.UserDO;

/**
 * @Author:chenxiaohui
 * @Description:
 * @Date:Create in 11:00 2017/12/13
 * @Modified By:
 */
public interface UserDao {
    /**
    * 插入用户数据
    * @param user
    * @return
    */
    public Long insertUser(UserDO user)throws Exception;
    /**
    * 通过id查询用户信息
    * @param id
    * @return
    */
    public UserDO getUser(Long id)throws Exception;
    /**
    *
    * @param
    * @return
    */
    public UserDO getUserBySlug(String slug)throws Exception;
    /**
    *
    * @param
    * @return
    */
    public void updateUser(UserDO user)throws Exception;



}
