package com.teacher.core.user.model;

import javax.persistence.*;

/**
 * @author Sickle
 * @comment
 * @date 2017/12/21 16:55
 * @mail 122331175@qq.com
 */
@Entity
@Table(name = "video_info")
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "videoname")
    private String video;
    @Column(name = "videophone")
    private String videophone;
    @Column(name = "teacher_id")
    private Integer teacherId;
    @Column(name = "class_id")
    private Integer classId;
    @Column(name = "video_disc")
    private String videoDisc;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getVideophone() {
        return videophone;
    }

    public void setVideophone(String videophone) {
        this.videophone = videophone;
    }

    public Integer getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Integer teacherId) {
        this.teacherId = teacherId;
    }

    public Integer getClassId() {
        return classId;
    }

    public void setClassId(Integer classId) {
        this.classId = classId;
    }

    public String getVideoDisc() {
        return videoDisc;
    }

    public void setVideoDisc(String videoDisc) {
        this.videoDisc = videoDisc;
    }
}
