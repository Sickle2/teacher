package com.weige.edu.dao.impl;

import java.util.List;

import com.weige.edu.dao.FansDAO;
import com.weige.edu.dao.data.FansDO;
import org.mybatis.spring.support.SqlSessionDaoSupport;
/**
 * 
 * @comment fans DaoImpl
 * @author zhaoshuai
 * @date 2018-01-25 11:03:31
 * @qq 122331175
 * @version 1.0
 */
public class FansDAOImpl extends SqlSessionDaoSupport implements FansDAO {
	/**
     * 添加fans
     * @param fans DO
     * @return
     */
    public int add(FansDO fansDO){
    	return this.getSqlSession().insert("com.liujinxin.dao.dao.FansDAO.add", fansDO);
    }

    /**
     *  更新fans（无条件）
     * @param fans DO
     * @return
     */
    public int update(FansDO fansDO){
    	return this.getSqlSession().update("com.liujinxin.dao.dao.FansDAO.update", fansDO);
    }

    /**
     *  更新fans（有条件）
     * @param fans DO
     * @return
     */
    public int updateBySelective(FansDO fansDO){
    	 return this.getSqlSession().update("com.liujinxin.dao.dao.FansDAO.updateBySelective",fansDO);
    }

    /**
     *  删除fans
     * @param uuid
     * @return
     */
    public int delete(String[] uuid){
    	return this.getSqlSession().delete("com.liujinxin.dao.dao.FansDAO.delete", uuid);
    }

    /**
     *  查询fans（根据ID）
     * @param uuid
     * @return
     */
    public FansDO queryById(String uuid){
    	return this.getSqlSession().selectOne("com.liujinxin.dao.dao.FansDAO.queryById", uuid);
    }

    /**
     * 查询fans总数（有条件）
     * @param fans DO
     * @return count
     */
    public Integer queryByCount(FansDO fansDO){
    	return this.getSqlSession().selectOne("com.liujinxin.dao.dao.FansDAO.queryByCount", fansDO);
    }

    /**
     * 查询fans信息列表（有条件）（待分页）
     * @param fans DO
     * @return List<FansDO>
     */
    public List<FansDO> queryByList(FansDO fansDO){
        List<FansDO>  fansList = getSqlSession().selectList("com.liujinxin.dao.dao.FansDAO.queryByList",fansDO);
        return (List<FansDO>)fansList;
    }
    
     /**
     * 查询fans信息列表（有条件）（无分页）（注：业务代码不要调用）
     * @param fans DO
     * @return List<FansDO>
     */
    public List<FansDO> queryByListNoPage(FansDO fansDO){
        List<FansDO>  fansList = getSqlSession().selectList("com.liujinxin.dao.dao.FansDAO.queryByList",fansDO);
        return fansList;
    }
}
