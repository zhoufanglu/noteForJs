<!--信用公示-->
<template>
  <div class="p-one-line">
    <div class="content">
      <div class="card_content ">
        <global-title title="企业信用公示表"></global-title>
        <div class="block" style="margin:20px"
             v-loading="listLoading_1"
        >
          <ep-table :data="ep_data_1" size="small" border head-color>
            <ep-table-item column="ssqymc" title="企业名称" width="200"></ep-table-item>
            <ep-table-item column="ah"  title="案由"></ep-table-item>
            <ep-table-item column="ajlx" title="民事" width="130"></ep-table-item>
            <ep-table-item column="larq" title="立案日期">
              <template slot-scope="props">
                <span>{{props.row.larq.substring(0,10)}}</span>
              </template>
            </ep-table-item>

          </ep-table>
        </div>
        <div class="block">
          <ep-pager right
                    @size-change="handleSizeChange_1"
                    @change="handleCurrentChange_1"
                    :now-page="ep_page_1.page"
                    :page-size="ep_page_1.size"
                    :total-num="ep_page_1.totalCount">
          </ep-pager>
        </div>


        <global-title title="严重违法失信企业名单信息表"></global-title>
        <div class="block"
             v-loading="listLoading_2"
             style="margin:20px">
          <ep-table :data="ep_data_2" size="small" border head-color >
            <ep-table-item column="ssqymc" title="企业名称"></ep-table-item>
            <ep-table-item column="ah" title="案号"></ep-table-item>
            <ep-table-item column="zxyjwh" title="执行依据文号" width="130"></ep-table-item>
            <ep-table-item column="zxfy" title="执行法院"></ep-table-item>
            <ep-table-item column="fbsj" title="发布时间">
              <template slot-scope="props">
                <span>{{props.row.fbsj.substring(0,10)}}</span>
              </template>
            </ep-table-item>
            <ep-table-item column="fddbr" title="法定代表人" width="130"></ep-table-item>
          </ep-table>
        </div>
        <ep-pager right
                  @size-change="handleSizeChange_2"
                  @change="handleCurrentChange_2"
                  :now-page="ep_page_2.page"
                  :page-size="ep_page_2.size"
                  :total-num="ep_page_2.totalCount">
        </ep-pager>
      </div>
    </div>
  </div>
</template>

<script>
  import misList from 'src/base/mixins/mislist';

  export default {
    name: "Cedit",
    extends: misList, // 务必继承

    data(){
      return{
        settings: {
          pk: 'id', // 主键
        },
        ep_data_1:[],
        ep_data_2:[],
        // 分页
        ep_page_1: {
          size: 10,
          page: 1,
          totalCount: 3,
        },
        ep_page_2: {
          size: 10,
          page: 1,
          totalCount: 3,
        },
        listLoading_1: false,
        listLoading_2: false

      }
    },
    created(){
      //第一个表格 企业信用公示表
      this.getLawsuits()
      //第二个表格 严重违法失信企业名单信息表
      this.getDishonestys()
    },
    mounted(){

    },
    methods:{
      async getLawsuits() {
        try {
          this.listLoading_1 = true
          const res = await this.$api.inOutManage.getLawsuits({
            page: this.ep_page_1.page,
            size: this.ep_page_1.size,
            ssqymc: this.$store.state.corp.currentCorp.corpName,
          })
          this.ep_data_1 = res.data.map.data.content
          this.ep_page_1.totalCount = res.data.map.data.totalElements
          this.listLoading_1 = false
        }
        catch (err){
          this.listLoading_1 = false
        }
      },
      async getDishonestys() {
        try {
          this.listLoading_2 = true
          const res = await this.$api.inOutManage.getDishonestys({
            page: this.ep_page_2.page,
            size: this.ep_page_2.size,
            ssqymc: this.$store.state.corp.currentCorp.corpName,
          })
          this.ep_data_2 = res.data.map.data.content
          this.ep_page_2.totalCount = res.data.map.data.totalElements
          this.listLoading_2 = false
        }
        catch (err){
          this.listLoading_2 = false
        }
      },
      handleSizeChange_1(val) {
        this.ep_page_1.size = val
        this.getLawsuits()
      },
      handleCurrentChange_1(val) {
        this.ep_page_1.page = val
        this.getLawsuits()
      },
      /**********************第二个分页***********************/
      handleSizeChange_2(val) {
        this.ep_page_2.size = val
        this.getDishonestys()
      },
      handleCurrentChange_2(val) {
        this.ep_page_2.page = val
        this.getDishonestys()
      },
    },
  }
</script>

<style scoped lang="scss">
  .p-one-line{

  }
  .card_content{
    margin-left: 20px;
    margin-top: 20px;
    height: 500px;

  }
  .list_content{
    width: 1000px;
    margin: 20px;
  }
  .content{
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
  }
</style>