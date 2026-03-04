<script lang="ts" setup>
import { useAddonVercount } from 'valaxy-addon-vercount'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

const { page, site } = useAddonVercount()
</script>

<template>
  <YunFooter>
  <span>本站总访问量 {{ site.pv }} 次</span>
  <span>本站总访客数 {{ site.uv }} 人</span>
    <VCLiveTime mt="2" start-time="2025-02-22">
      <template #live-time-before>
        <span>本站已静悄悄的运行❄</span>
      </template>
      <template #live-time-after>
        <span></span>
      </template>
    </VCLiveTime>
  </YunFooter>
</template>

