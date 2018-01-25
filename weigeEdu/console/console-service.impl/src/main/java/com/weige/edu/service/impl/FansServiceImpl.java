package com.weige.edu.service.impl;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.weige.edu.dao.FansDAO;
import com.weige.edu.dao.data.FansDO;
import com.weige.edu.dao.data.view.FansView;
import com.weige.edu.service.FansService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


/**
 * 
 * @comment fans ServiceImpl
* @author zhaoshuai
 * @date 2018-01-25 11:03:31
 * @qq 122331175
 * @version 1.0
 */
 @Component("fansService")
public class FansServiceImpl implements FansService {
	@Autowired
    private FansDAO dao;
    
    /**
     * 添加fans
     * @param fans View
     * @return
     */
    public int add(FansView fansView){
    	FansDO fansDO = new FansDO();
        BeanUtils.copyProperties(fansView,fansDO);
                                return dao.add(fansDO);
    }

    /**
     *  更新fans（无条件）
     * @param fans View
     * @return
     */
    public int update(FansView fansView){
    	FansDO fansDO = new FansDO();
        BeanUtils.copyProperties(fansView,fansDO);
        return dao.update(fansDO);
    }

    /**
     *  更新fans（有条件）
     * @param fans View
     * @return
     */
    public int updateBySelective(FansView fansView){
    	FansDO fansDO = new FansDO();
        BeanUtils.copyProperties(fansView,fansDO);
        return dao.updateBySelective(fansDO);
    }

    /**
     *  删除fans
     * @param uuid
     * @return
     */
    public int delete(String[] uuid){
    	return dao.delete(uuid);
    }

    /**
     *  查询fans（根据ID）
     * @param uuid
     * @return
     */
    public FansDO queryById(String uuid){
    	return dao.queryById(uuid);
    }

    /**
     * 查询fans总数（有条件）
     * @param fans View
     * @return count
     */
    public Integer queryByCount(FansView fansView){
    	FansDO fansDO = new FansDO();
        BeanUtils.copyProperties(fansView,fansDO);
        return dao.queryByCount(fansDO);
    }

    /**
     * 查询fans信息列表（有条件）
     * @param fans DO
     * @return List<FansDO>
     */
    public List<FansDO> queryByList(FansDO fansDO){
        return dao.queryByList(fansDO);
    }
    
    /**
     * 查询fans信息列表（有条件）
     * @param fans DO
     * @return List<FansDO>
     */
    public List<FansDO> queryByListNoPage(FansDO fansDO, String params, String order){
        return dao.queryByListNoPage(fansDO);
    }
    
}
