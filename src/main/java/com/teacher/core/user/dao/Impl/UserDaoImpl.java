package com.teacher.core.user.dao.Impl;

import com.teacher.core.user.dao.UserDao;
import com.teacher.core.user.model.UserDO;
import com.teacher.util.PubUtil;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * @Author:chenxiaohui
 * @Description:
 * @Date:Create in 11:18 2017/12/13
 * @Modified By:
 */

// @Repository用于标注数据访问组件，即DAO组件；
// @Component 是一个泛化的概念，仅仅表示一个组件 (Bean) ，可以作用在任何层次。
// @Service 通常作用在业务层，但是目前该功能与 @Component 相同。
// @Constroller 通常作用在控制层，但是目前该功能与 @Component 相同。
@Repository(value = "userDao")
public class UserDaoImpl implements UserDao{
    private static final Logger logger=  LoggerFactory.getLogger(UserDaoImpl.class);

    @Autowired
    private SessionFactory sessionFactory;
    @Override
    public Long insertUser(UserDO user) throws Exception {
        Session session = PubUtil.createSession(sessionFactory);
        Long idetifier = (Long) session.save(user);
        PubUtil.close(session);
        return idetifier;
    }

    @Override
    public UserDO getUser(Long id) throws Exception {
        Session session = PubUtil.createSession(sessionFactory);
        Criteria c=session.createCriteria(UserDO.class);
        c.add(Restrictions.eq("id",id));
        List<UserDO> list =c.list();
        UserDO user = null;
        if ( 1 == list.size()){
            user=list.get(0);
        }else {
            user = null;
        }
        session.evict(user);
        PubUtil.close(sessionFactory,session);

        return user;
    }

    @Override
    public UserDO getUserBySlug(String slug) throws Exception {
        Session session = PubUtil.createSession(sessionFactory);
        Criteria c=session.createCriteria(UserDO.class);
        c.add(Restrictions.eq("slug",slug));
        List<UserDO> list =c.list();
        UserDO user = null;
        if ( 1 == list.size()){
            user=list.get(0);
        }else {
            user = null;
        }
        session.evict(user);
        PubUtil.close(sessionFactory,session);

        return user;
    }

    @Override
    public void updateUser(UserDO user) throws Exception {
        Session session = PubUtil.createSession(sessionFactory);
        Transaction transaction = session.beginTransaction();
        session.update(user);
        transaction.commit();

        session.evict(user);
        PubUtil.close(sessionFactory,session);
    }

}
