## 父组件

```vue
<myDialog v-model:show="show"></myDialog>

// 控制弹窗 const show = ref(false)
```

## 子组件

```vue
<!-- 弹窗 -->
<template>
  <el-dialog
    v-model="$show"
    title="标题"
    align-center
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    @close="onCancel"
    width="50%"
  >
    Content
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="onCancel">取消</el-button>
        <el-button type="primary" @click="onSubmit"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { toRefs, computed } from "vue"

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

const { show } = toRefs(props)

const emit = defineEmits(["update:show"])

const onSubmit = () => {
  onCancel()
}

const onCancel = () => {
  $show.value = false
}

const $show = computed({
  get() {
    return show.value
  },
  set(val) {
    emit("update:show", val)
  }
})
</script>

<style lang="scss" scoped></style>
```
