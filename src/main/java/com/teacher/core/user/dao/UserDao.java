package com.teacher.core.user.dao;

import com.teacher.core.user.model.User;

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
    public Long insertUser(User user)throws Exception;
    /**
    * 通过id查询用户信息
    * @param id
    * @return
    */
    public User getUser(Long id)throws Exception;
    /**
    *
    * @param
    * @return
    */
    public User getUserBySlug(String slug)throws Exception;
    /**
    *
    * @param
    * @return
    */
    public void updateUser(User user)throws Exception;



}
