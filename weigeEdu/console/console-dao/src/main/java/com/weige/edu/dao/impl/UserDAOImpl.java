package com.weige.edu.dao.impl;

import java.util.List;

import com.weige.edu.dao.UserDAO;
import com.weige.edu.dao.data.UserDO;
import org.mybatis.spring.support.SqlSessionDaoSupport;
/**
 * 
 * @comment Users and global privileges DaoImpl
 * @author zhaoshuai
 * @date 2018-01-25 11:03:31
 * @qq 122331175
 * @version 1.0
 */
public class UserDAOImpl extends SqlSessionDaoSupport implements UserDAO {
	/**
     * 添加Users and global privileges
     * @param Users and global privileges DO
     * @return
     */
    public int add(UserDO userDO){
    	return this.getSqlSession().insert("com.liujinxin.dao.dao.UserDAO.add", userDO);
    }

    /**
     *  更新Users and global privileges（无条件）
     * @param Users and global privileges DO
     * @return
     */
    public int update(UserDO userDO){
    	return this.getSqlSession().update("com.liujinxin.dao.dao.UserDAO.update", userDO);
    }

    /**
     *  更新Users and global privileges（有条件）
     * @param Users and global privileges DO
     * @return
     */
    public int updateBySelective(UserDO userDO){
    	 return this.getSqlSession().update("com.liujinxin.dao.dao.UserDAO.updateBySelective",userDO);
    }

    /**
     *  删除Users and global privileges
     * @param uuid
     * @return
     */
    public int delete(String[] uuid){
    	return this.getSqlSession().delete("com.liujinxin.dao.dao.UserDAO.delete", uuid);
    }

    /**
     *  查询Users and global privileges（根据ID）
     * @param uuid
     * @return
     */
    public UserDO queryById(String uuid){
    	return this.getSqlSession().selectOne("com.liujinxin.dao.dao.UserDAO.queryById", uuid);
    }

    /**
     * 查询Users and global privileges总数（有条件）
     * @param Users and global privileges DO
     * @return count
     */
    public Integer queryByCount(UserDO userDO){
    	return this.getSqlSession().selectOne("com.liujinxin.dao.dao.UserDAO.queryByCount", userDO);
    }

    /**
     * 查询Users and global privileges信息列表（有条件）（待分页）
     * @param Users and global privileges DO
     * @return List<UserDO>
     */
    public List<UserDO> queryByList(UserDO userDO){
        List<UserDO>  userList = getSqlSession().selectList("com.liujinxin.dao.dao.UserDAO.queryByList",userDO);
        return (List<UserDO>)userList;
    }
    
     /**
     * 查询Users and global privileges信息列表（有条件）（无分页）（注：业务代码不要调用）
     * @param Users and global privileges DO
     * @return List<UserDO>
     */
    public List<UserDO> queryByListNoPage(UserDO userDO){
        List<UserDO>  userList = getSqlSession().selectList("com.liujinxin.dao.dao.UserDAO.queryByList",userDO);
        return userList;
    }
}
