const core = require('@actions/core');
const { exec } = require('@actions/exec')
const github = require('@actions/github');

;(async () => {
  try {
    await exec("curl --version")
    await exec("curl https://dl.google.com/gactions/v3/release/gactions-sdk_linux.tar.gz --output gactions.tar.gz")
    await exec("tar xvf gactions.tar.gz")
    await exec("mv aog_cli/gactions .")
    await exec("rmdir aog_cli")
    await exec("rm gactions.tar.gz")
    core.exportVariable("PATH", `${process.env["PATH"]}:${process.cwd()}`)
  } catch (error) {
    core.setFailed(error.message);
  }  
})()
