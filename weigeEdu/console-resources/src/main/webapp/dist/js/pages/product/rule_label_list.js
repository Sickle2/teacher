/**
 * Created by zhouyr on 16/1/7.
 */
$('#table').bootstrapTable({
    pagination:true,
    pageSize:2,
    search:true,
    showRefresh:true,
    showToggle:true,
    showColumns:true,
    columns: [{

        field: 'id',
        align: 'center',
        valign: 'middle',
        sortable: true,
        title: '序号'

    }, {
        field: 'name',
        align: 'center',
        valign: 'middle',
        title: '标签名称'
    }, {
        field: 'createTime',
        align: 'center',
        valign: 'middle',
        title: '添加时间'
    }, {
        field: 'discount',
        align: 'center',
        valign: 'middle',
        sortable: true,
        title: '折扣'
    }, {
        field: 'minus',
        align: 'center',
        valign: 'middle',
        sortable: true,
        title: '立减'
    }, {
        field: 'curFund',
        align: 'center',
        valign: 'middle',
        sortable: true,
        title: '当月投资(元)'
    }, {
        field: 'totalFund',
        align: 'center',
        valign: 'middle',
        sortable: true,
        title: '总投资(元)'
    }, {
        field: 'curInvite',
        align: 'center',
        valign: 'middle',
        sortable: true,
        title: '当月邀友'
    }, {
        field: 'totalInvite',
        align: 'center',
        valign: 'middle',
        sortable: true,
        title: '邀友总数'
    }, {
        field: 'productLimit',
        align: 'center',
        valign: 'middle',
        title: '商品限制'
    }, {
        field: 'ruleLabelLimit',
        align: 'center',
        valign: 'middle',
        title: '标签限制'
    }, {
        field: 'action',
        align: 'center',
        valign: 'middle',
        title: '操作'
    }]
});
