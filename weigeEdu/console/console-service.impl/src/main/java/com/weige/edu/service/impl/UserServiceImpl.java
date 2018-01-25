package com.weige.edu.service.impl;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.weige.edu.dao.UserDAO;
import com.weige.edu.dao.data.UserDO;
import com.weige.edu.dao.data.view.UserView;
import com.weige.edu.service.UserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 
 * @comment Users and global privileges ServiceImpl
* @author zhaoshuai
 * @date 2018-01-25 11:03:31
 * @qq 122331175
 * @version 1.0
 */
 @Component("userService")
public class UserServiceImpl implements UserService {
	@Autowired
    private UserDAO dao;
    
    /**
     * 添加Users and global privileges
     * @param Users and global privileges View
     * @return
     */
    public int add(UserView userView){
    	UserDO userDO = new UserDO();
        BeanUtils.copyProperties(userView,userDO);
                                return dao.add(userDO);
    }

    /**
     *  更新Users and global privileges（无条件）
     * @param Users and global privileges View
     * @return
     */
    public int update(UserView userView){
    	UserDO userDO = new UserDO();
        BeanUtils.copyProperties(userView,userDO);
        return dao.update(userDO);
    }

    /**
     *  更新Users and global privileges（有条件）
     * @param Users and global privileges View
     * @return
     */
    public int updateBySelective(UserView userView){
    	UserDO userDO = new UserDO();
        BeanUtils.copyProperties(userView,userDO);
        return dao.updateBySelective(userDO);
    }

    /**
     *  删除Users and global privileges
     * @param uuid
     * @return
     */
    public int delete(String[] uuid){
    	return dao.delete(uuid);
    }

    /**
     *  查询Users and global privileges（根据ID）
     * @param uuid
     * @return
     */
    public UserDO queryById(String uuid){
    	return dao.queryById(uuid);
    }

    /**
     * 查询Users and global privileges总数（有条件）
     * @param Users and global privileges View
     * @return count
     */
    public Integer queryByCount(UserView userView){
    	UserDO userDO = new UserDO();
        BeanUtils.copyProperties(userView,userDO);
        return dao.queryByCount(userDO);
    }

    /**
     * 查询Users and global privileges信息列表（有条件）
     * @param Users and global privileges DO
     * @return List<UserDO>
     */
    public List<UserDO> queryByList(UserDO userDO){
        return dao.queryByList(userDO);
    }
    
    /**
     * 查询Users and global privileges信息列表（有条件）
     * @param Users and global privileges DO
     * @return List<UserDO>
     */
    public List<UserDO> queryByListNoPage(UserDO userDO, String params, String order){
        return dao.queryByListNoPage(userDO);
    }
    
}
