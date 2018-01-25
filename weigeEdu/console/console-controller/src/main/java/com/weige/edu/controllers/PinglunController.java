package com.weige.edu.controllers;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * @comment pinglun Controller
 * @author zhaoshuai
 * @date 2018-01-25 11:03:33
 * @qq 122331175
 * @version 1.0
 */
@Controller
@RequestMapping("/pinglun") 
public class PinglunController{
	@InitBinder
    public void initBinder(WebDataBinder binder) {
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        binder.registerCustomEditor(java.util.Date.class, new CustomDateEditor(dateFormat, true));
    } 
    
	/**
	 *
	 * 自动注入，不需要生成set方法，required=false表示没有实现类，也不会报错。
	 */
	@Autowired(required=false) 
	private PinglunService  pinglunService;


	/**
	 * 
	 * @param dicModel  
	 * @param model 
	 * @param request 
	 * @return list 
	 * @throws Exception 
	 */
    @RequestMapping("/list")
    public ModelAndView list(ModelMap model, PinglunView dicModel,
            HttpServletRequest request) throws Exception {
        return new ModelAndView("pinglun/pinglunList");
	}
	
	
	/**
     * @param bean 
     * @return map 
     * @throws Exception 
     */
    @RequestMapping("/dataList")
    @ResponseBody
    public String datalist(PinglunDO bean,LimitPage page) throws Exception {

        List<PinglunDO> dataList = pinglunService.queryByList(bean,page.createPageBounds());
        // 设置页面数据
        Map<String, Object> jsonMap = new HashMap<String, Object>();
        jsonMap.put("total",Integer.valueOf(dataList.getPaginator().getTotalCount()));
        jsonMap.put("rows",dataList);
        return JSON.toJSONString(jsonMap);
    }
    
    /**
     * @param bean 
     * @return map 
     * @throws Exception 
     */
    @RequestMapping("/dataListNoPage")
    @ResponseBody
    public String dataListNoPage(PinglunDO bean,String params ,String order) throws Exception {

        List<PinglunDO> dataList = pinglunService.queryByListNoPage(bean, params,order);
        // 设置页面数据
        Map<String, Object> jsonMap = new HashMap<String, Object>();
        jsonMap.put("data",dataList);
        return JSON.toJSONString(jsonMap);
    }

 	/**
	 * 添加数据
     * @param bean 
     * @return map 
     * @throws Exception  
	 */
	@RequestMapping("/save")
	@ResponseBody
	public Map<String, Object> save(PinglunView bean, HttpServletRequest request) throws Exception{
              if (bean.getId() == null || bean.getId().equals("")) {
                   pinglunService.add(bean);
        } else {
            pinglunService.updateBySelective(bean);
        }
       return WebUtils.successMessage("保存成功~");
	}

	/**
	 * 修改数据
	 * 
	 * @param bean  
	 * @return map 
	 * @throws Exception  
	 */
	@RequestMapping("/update")
	public Map<String, Object> update(PinglunView bean) throws Exception{
		Map<String,Object>  context = new HashMap<String,Object>();		
		pinglunService.updateBySelective(bean);
		return WebUtils.successMessage("保存成功~");
	}	


	/**
	 * 根据id获取数据
	 * 
	 * @param uuid 表有主键的话是主键，无主键的话是表第一个字段
	 * @return map 
	 * @throws Exception  
	 */
    @RequestMapping("/getId")
    @ResponseBody
    public Map<String, Object> getId(String uuid) throws Exception {
        Map<String, Object> context = new HashMap<String, Object>();
        PinglunDO bean = pinglunService.queryById(uuid);
        if (bean == null) {
            return WebUtils.failureMessage("没有找到对应的记录!");
        }
        context.put(WebUtils.SUCCESS, true);
        context.put("data", bean);
        return context;
    }

	/**
	 * 根据id删除数据
	 * @param uuidArr 表有主键的话是主键，无主键的话是表第一个字段
	 * @param response 
	 * @return map
	 * @throws Exception 
	 */
	@RequestMapping("/delete")
	@ResponseBody
    public Map<String, Object> delete(String uuidArr, HttpServletResponse response)
            throws Exception {
        String[] uuid = uuidArr.split(",");
        pinglunService.delete(uuid);
        return WebUtils.successMessage("删除成功");
    }
}
