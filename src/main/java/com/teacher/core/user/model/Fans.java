package com.teacher.core.user.model;

import javax.persistence.*;

/**
 * @author Sickle
 * @comment
 * @date 2017/12/21 17:25
 * @mail 122331175@qq.com
 */
@Entity
@Table(name = "fans")
public class Fans {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "fans_id")
    private Integer fans_id;
    @Column(name = "user_id")
    private Integer userId;
}
