package com.teacher.core.user.service;

import com.teacher.core.user.model.BaseDO;
import com.teacher.core.user.model.UserDO;

import java.util.List;

/**
 * @Author:chenxiaohui
 * @Description:
 * @Date:Create in 19:54 2017/12/13
 * @Modified By:Sickle
 */
public interface UserService {
    /**
    * 创建用户信息
    * @param user
    * @return
    */
    public Long createUser(UserDO user);
    /**
    * 通过id查询用户
    * @param id
    * @return
    */
    public List<UserDO> queryById(Integer id);
    /**
    * 通过用户名取密码
    * @param
    * @return
    */
    public BaseDO queryByUserName(String userName);
    /**
    * 修改信息通过id
    * @param
    * @return
    */
    public int updataById(UserDO userDO);

}
