package com.weige.edu.service.impl;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.weige.edu.dao.PinglunDAO;
import com.weige.edu.dao.data.PinglunDO;
import com.weige.edu.dao.data.view.PinglunView;
import com.weige.edu.service.PinglunService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 
 * @comment pinglun ServiceImpl
* @author zhaoshuai
 * @date 2018-01-25 11:03:33
 * @qq 122331175
 * @version 1.0
 */
 @Component("pinglunService")
public class PinglunServiceImpl implements PinglunService {
	@Autowired
    private PinglunDAO dao;
    
    /**
     * 添加pinglun
     * @param pinglun View
     * @return
     */
    public int add(PinglunView pinglunView){
    	PinglunDO pinglunDO = new PinglunDO();
        BeanUtils.copyProperties(pinglunView,pinglunDO);
                                return dao.add(pinglunDO);
    }

    /**
     *  更新pinglun（无条件）
     * @param pinglun View
     * @return
     */
    public int update(PinglunView pinglunView){
    	PinglunDO pinglunDO = new PinglunDO();
        BeanUtils.copyProperties(pinglunView,pinglunDO);
        return dao.update(pinglunDO);
    }

    /**
     *  更新pinglun（有条件）
     * @param pinglun View
     * @return
     */
    public int updateBySelective(PinglunView pinglunView){
    	PinglunDO pinglunDO = new PinglunDO();
        BeanUtils.copyProperties(pinglunView,pinglunDO);
        return dao.updateBySelective(pinglunDO);
    }

    /**
     *  删除pinglun
     * @param uuid
     * @return
     */
    public int delete(String[] uuid){
    	return dao.delete(uuid);
    }

    /**
     *  查询pinglun（根据ID）
     * @param uuid
     * @return
     */
    public PinglunDO queryById(String uuid){
    	return dao.queryById(uuid);
    }

    /**
     * 查询pinglun总数（有条件）
     * @param pinglun View
     * @return count
     */
    public Integer queryByCount(PinglunView pinglunView){
    	PinglunDO pinglunDO = new PinglunDO();
        BeanUtils.copyProperties(pinglunView,pinglunDO);
        return dao.queryByCount(pinglunDO);
    }

    /**
     * 查询pinglun信息列表（有条件）
     * @param pinglun DO
     * @return List<PinglunDO>
     */
    public List<PinglunDO> queryByList(PinglunDO pinglunDO){
        return dao.queryByList(pinglunDO);
    }

    @Override
    public List<PinglunDO> queryByListNoPage(PinglunDO pinglunDO, String params, String order) {
        return null;
    }


}
