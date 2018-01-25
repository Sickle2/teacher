package com.teacher.core.user.service.impl;

import com.teacher.core.user.dao.UserDao;
import com.teacher.core.user.model.BaseDO;
import com.teacher.core.user.model.UserDO;
import com.teacher.core.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


/**
 * @Author:chenxiaohui
 * @Description:
 * @Date:Create in 19:58 2017/12/13
 * @Modified By:
 */

public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
    @Autowired
    private UserDao userDao;


    @Override
    public Long createUser(UserDO user) {
            Long id = null;
            try {
                id=userDao.insertUser(user);
                logger.info("create user..."+id);
            } catch (Exception e) {
                e.printStackTrace();
            }

            return id;
    }

    @Override
    public List<UserDO> queryById(Integer id) {
        return null;
    }

    @Override
    public BaseDO queryByUserName(String userName) {
        return null;
    }

    @Override
    public int updataById(UserDO userDO) {
        return 0;
    }

    public static void main(String[] args) {
        UserService userService = new UserServiceImpl();
        UserDO userDO = new UserDO();
        userDO.setUsername("zhaoshuai");
        userDO.setPassword("123123123");
        userService.createUser(userDO);
    }
}
