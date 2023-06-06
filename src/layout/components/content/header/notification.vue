<template>
  <div class="text-center w-10">
    <el-badge
      v-click-outside="openNotificationPopover"
      ref="messageRef"
      :value="3"
    >
      <Bell class="h-5 text-center" />
    </el-badge>
    <el-popover
      ref="popoverRef"
      :virtual-ref="messageRef"
      trigger="click"
      virtual-triggering
      :width="300"
    >
      <el-tabs model-value="message">
        <el-tab-pane label="消息(8)" name="message">
          <div>
            <div
              class="flex flex-row w-full border-b border-b-slate-300 dark:border-b-slate-500 mt-2"
              v-for="(message, key) in messages"
              :key="key"
            >
              <div>
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  class="w-2 h-2"
                />
              </div>
              <div class="ml-2 h-10 mt-2">
                {{ message }}
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="通知(1)" name="notice">
          <div>
            <div
              class="flex flex-row w-full border-b border-b-slate-300 dark:border-b-slate-500 mt-2"
              v-for="(message, key) in messages"
              :key="key"
            >
              <div>
                <el-avatar
                  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                  class="w-2 h-2"
                />
              </div>
              <div class="ml-2 h-10 mt-2">
                {{ message }}
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { Bell } from '@element-plus/icons-vue'
import { ClickOutside as vClickOutside } from 'element-plus'
import { ref, unref } from 'vue'
const messageRef = ref()
const popoverRef = ref()

const messages = ref()

messages.value = [
  '你收到 张浩瀚 的好友申请',
  '你收到 张浩瀚 的邀请',
  '你收到 张浩瀚 的通知',
]

function openNotificationPopover() {
  unref(popoverRef).popperRef?.delayHide?.()
}
</script>

<style scoped></style>
