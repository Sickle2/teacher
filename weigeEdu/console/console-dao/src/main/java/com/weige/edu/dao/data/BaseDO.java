package com.weige.edu.dao.data;

/**
 * @author zhaoshuai@ucfgroup.com
 * @Title: weigeEdu
 * @Copyright: Copyright (c) 2018/1/25
 * @Description:
 * @Company: ucfgroup.com
 * @Created on 2018/1/25 11:19
 */
public class BaseDO {
    private Integer id;

    private String uuid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid;
    }
}
