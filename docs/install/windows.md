---
id: windows
title: Windows
pagination_prev: install/choosemethod
pagination_next: install/configuration
description: Install Unpackerr on a Windows system.
---

# Windows Installation

- Extract a `.exe.zip` file from [the Releases page](https://github.com/Unpackerr/unpackerr/releases)
  into a folder like `C:\Program Files\unpackerr\`.
- Run the `unpackerr.amd64.exe` binary. This starts the app in the system tray.
- Click the systray icon and select `Config` -> `Edit`.
- Edit the config to suit your system and save.
- Click the systray icon again and select `Quit`. Then open the app again.
- View the logs by clicking the systray icon and `Logs` -> `View`.
- Make a shortcut to the application in your Startup menu to run it when you login.

:::caution Archive Access
Requires access to your download location.
Make sure you set the `path` variables correctly in the configuration.
Even if they're set incorrectly this app makes a best effort attempt to
locate your downloads. If Unpackerr can't find your downloads, then the
`path` (or `paths`) variables need to be adjusted.
:::

## Running unpackerr as a Windows service

:::caution Community Contribution
The following content was provided by a community member, [IamGimli](https://github.com/IamGimli).
:::

If you want unpackerr to run automatically upon Windows boot,
without a user needing to be logged-on, follow these instructions:

Download and configure unpackerr according to the instructions on the
[main page](https://github.com/davidnewhall/unpackerr).
Make sure unpackerr runs without error messages in the logs before you continue.
Once you've confirmed that unpackerr is properly configured, close it by
right-clicking its icon in the taskbar and selecting `Quit`.

Extract the [latest release of the Non-Sucking Service Manager](https://nssm.cc/download)
into a folder like  `C:\Program Files\nssm\`.

From either the Control Panel or Start menu search bar, open the Advanced System Settings.
From the `Advanced` tab, click `Environment Variables...`. Click the `New...` button
under the `System variables` box. In the `Variable name:` field, enter `USEGUI` and
in the `Variable value:` field, enter `false`. Click `Ok` three times to close all
of the Advanced System Settings windows.

On your desktop, create a new text file named `unpackerr.reg` and put the following in it:

```go
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\unpackerr-Service]
"Type"=dword:00000010
"Start"=dword:00000002
"ErrorControl"=dword:00000001
"ImagePath"=hex(2):43,00,3a,00,5c,00,50,00,72,00,6f,00,67,00,72,00,61,00,6d,00,\
  20,00,46,00,69,00,6c,00,65,00,73,00,20,00,28,00,78,00,38,00,36,00,29,00,5c,\
  00,6e,00,73,00,73,00,6d,00,5c,00,6e,00,73,00,73,00,6d,00,2d,00,32,00,2e,00,\
  32,00,34,00,5c,00,77,00,69,00,6e,00,36,00,34,00,5c,00,6e,00,73,00,73,00,6d,\
  00,2e,00,65,00,78,00,65,00,00,00
"ObjectName"="accountname"
"DelayedAutostart"=dword:00000001
"FailureActions"=hex:00,00,00,00,00,00,00,00,00,00,00,00,03,00,00,00,14,00,00,\
  00,01,00,00,00,20,bf,02,00,01,00,00,00,20,bf,02,00,00,00,00,00,00,00,00,00
"DisplayName"="unpackerr-Service"
"FailureActionsOnNonCrashFailures"=dword:00000001

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\unpackerr-Service\Parameters]
"AppDirectory"="C:\\Program Files\\unpackerr"
"Application"="C:\\Program Files\\unpackerr\\unpackerr.amd64.exe"
"AppParameters"=""

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\unpackerr-Service\Parameters\AppExit]
@="Restart"
```

Replace **accountname** with the name of the local user account that you want
unpackerr to run under. Make sure that account has all the permissions required
to access to all of the paths that unpackerr will use. Also make sure that the
"AppDirectory" and "Application" fields point to the location where you installed
unpackerr, making sure to double up the backslashes in the path.

Save the file and then double-click it. You'll get a warning that importing
registry keys could harm your system, click "Yes".

Press `Windows-R` and open `services.msc`.
Scroll down to the service named `unpackerr-Service`. If it isn't in the list,
you may need to reboot your computer. Double-click `unpackerr-Service`.
Under `Path to executable:`, make sure that the path is where you extracted nssm.
If it isn't, go to the section `Path configuration` below and return here after
you modify the path. On the `Log On` tab, make sure the account name is correct
and enter the password for that user account. Click `Ok` to close the service
properties window. You can now start the unpackerr service by right-clicking
it and selecting `Start`. To confirm that it's running correctly, look at
unpackerr's log file, which you should have configured when you first installed it.

Unpackerr will now start automatically whenever the Windows machine is booted up,
without the need for a user to be logged on.

Path configuration:

Press `Windows-R` and open `regedit.exe`. Scroll down to the following registry key: `Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\unpackerr-Service`
Under that registry key, double-click the `ImagePath` value and enter the proper
path to the nssm.exe that you extracted previously. Click `Ok` then close Regedit.
