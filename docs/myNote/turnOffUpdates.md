# 关闭 Windows 更新

网上很多方法，这里提供一种可永久关闭，但又能随时开启的方法

### 1. 打开注册表

```cmd
// win+r
regedit
```

### 2. 进入以下路径

计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\WindowsUpdate\UX\Settings

### 3. 新建 FlightSettingsMaxPauseDays

选中 Settings 右键 -> 新建 -> DWORD(32 位)值 -> FlightSettingsMaxPauseDays
![](../assets/images/myNote\turnOffUpdates\1.png)
![](../assets/images/myNote\turnOffUpdates\2.png)

#### 完成后，你就可以在设置中选择需要延后的时间
![](../assets/images/myNote\turnOffUpdates\3.png)