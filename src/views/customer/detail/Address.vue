<template>
  <div class="wrapper">
    <div>
      <el-table
        :data="tempData"
        style="width: 100%"
        :row-class-name="tableRowClassName"
        height="calc(100vh - 220px)"
      >
        <el-table-column prop="id" label="编号" width="180"> </el-table-column>
        <el-table-column prop="province" label="省" width="180">
        </el-table-column>
        <el-table-column prop="city" label="市"> </el-table-column>
        <el-table-column prop="area" label="区/县"> </el-table-column>
        <el-table-column prop="address" label="街道"> </el-table-column>
        <el-table-column prop="telephone" label="手机号"> </el-table-column>
      </el-table>
    </div>

    <!-- 分页 -->
    <div class="block">
      <el-pagination
        :current-page.sync="page"
        :page-sizes="[2, 5, 10, 15]"
        :page-size.sync="pageSize"
        layout="sizes, prev, pager, next"
        :total="addressData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
      page: 1,
      pageSize: 10,
    };
  },
  computed: {
    ...mapGetters("customer", ["addressData"]),
    tempData() {
      return this.addressData.slice(
        (this.page - 1) * this.pageSize,
        this.page * this.pageSize
      );
    },
  },
  methods: {
    ...mapActions("customer", ["findAddressByCustomerId"]),
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
  created() {
    this.findAddressByCustomerId({ id: this.id });
  },
  mounted() {},
};
</script>
<style scoped>
.el-table .warning-row {
  background: pink;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>