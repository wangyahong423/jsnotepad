var $dlgGoto = (function () {
    var html = ''
    + '<div class="notepad-dlg-mask notepad-dlg-about">'
      + '<div class="dialogbox notepad-dlgbox">'
        + '<div class="notepad-dlg-titlebar">'
          + '<p class="title">关于“记事本”</p>'
          + '<span class="close-btn">✖</span>'
        + '</div>'
        + '<div class="main notepad-dlg-main">'
          + '<h1 class="slogan">JSNotepad</h1>'
          + '<hr>'
          + '<img class="app-logo" src="../../images/notepad-icon-32.png" alt="JSNotepad">'
          + '<div class="info">'
            + '<p>作者：王顶</p>'
            + '<p>QQ：408542507</p>'
            + '<p>仓库地址：<a href="https://github.com/wangyahong423/jsnotepad/" target="_blank">https://github.com/wangyahong423/jsnotepad/</a></p>'
          + '</div>'
          + '<input class="btn-ok btn" type="button" value="确定" autofocus>'
        + '</div>'
      + '</div>'
    + '</div>';

    $dlg = $(html),
        cfg = {
            container:'body',
            num:6,
            title:'同意',
            onClick:null
        };
    
    function show(conf){
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        $dlg.click(cfg.onClick);
    }
    return {
        show: show
    }
}());