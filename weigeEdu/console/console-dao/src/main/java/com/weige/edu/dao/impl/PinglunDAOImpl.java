package com.weige.edu.dao.impl;

import java.util.List;

import com.weige.edu.dao.PinglunDAO;
import com.weige.edu.dao.data.PinglunDO;
import org.mybatis.spring.support.SqlSessionDaoSupport;
/**
 * 
 * @comment pinglun DaoImpl
 * @author zhaoshuai
 * @date 2018-01-25 11:03:33
 * @qq 122331175
 * @version 1.0
 */
public class PinglunDAOImpl extends SqlSessionDaoSupport implements PinglunDAO {
	/**
     * 添加pinglun
     * @param pinglun DO
     * @return
     */
    public int add(PinglunDO pinglunDO){
    	return this.getSqlSession().insert("com.liujinxin.dao.dao.PinglunDAO.add", pinglunDO);
    }

    /**
     *  更新pinglun（无条件）
     * @param pinglun DO
     * @return
     */
    public int update(PinglunDO pinglunDO){
    	return this.getSqlSession().update("com.liujinxin.dao.dao.PinglunDAO.update", pinglunDO);
    }

    /**
     *  更新pinglun（有条件）
     * @param pinglun DO
     * @return
     */
    public int updateBySelective(PinglunDO pinglunDO){
    	 return this.getSqlSession().update("com.liujinxin.dao.dao.PinglunDAO.updateBySelective",pinglunDO);
    }

    /**
     *  删除pinglun
     * @param uuid
     * @return
     */
    public int delete(String[] uuid){
    	return this.getSqlSession().delete("com.liujinxin.dao.dao.PinglunDAO.delete", uuid);
    }

    /**
     *  查询pinglun（根据ID）
     * @param uuid
     * @return
     */
    public PinglunDO queryById(String uuid){
    	return this.getSqlSession().selectOne("com.liujinxin.dao.dao.PinglunDAO.queryById", uuid);
    }

    /**
     * 查询pinglun总数（有条件）
     * @param pinglun DO
     * @return count
     */
    public Integer queryByCount(PinglunDO pinglunDO){
    	return this.getSqlSession().selectOne("com.liujinxin.dao.dao.PinglunDAO.queryByCount", pinglunDO);
    }

    /**
     * 查询pinglun信息列表（有条件）（待分页）
     * @param pinglun DO
     * @return List<PinglunDO>
     */
    public List<PinglunDO> queryByList(PinglunDO pinglunDO){
        List<PinglunDO>  pinglunList = getSqlSession().selectList("com.liujinxin.dao.dao.PinglunDAO.queryByList");
        return (List<PinglunDO>)pinglunList;
    }
    
     /**
     * 查询pinglun信息列表（有条件）（无分页）（注：业务代码不要调用）
     * @param pinglun DO
     * @return List<PinglunDO>
     */
    public List<PinglunDO> queryByListNoPage(PinglunDO pinglunDO){
        List<PinglunDO>  pinglunList = getSqlSession().selectList("com.liujinxin.dao.dao.PinglunDAO.queryByList",pinglunDO);
        return pinglunList;
    }
}
