var list = [
    // { name: "temp", url: "" },

    { name: "fluffyfall", url: "https://mmp-cdn.rayjump.com/qa_task/t3795/v10/fluffyfall_pm6dlc/fluffyfall_pm6dlc.html?preview=true&mw_test=0" },
    { name: "aquapark", url: "https://mmp-cdn.rayjump.com/qatask/t10959/v5/m_zh-cn_aquaparkio3_XoaUJH5hp_ios_ty/m_zh-cn_aquaparkio3_XoaUJH5hp_ios_ty.html?preview=true&mw_test=0" },
    { name: "badboy", url: "https://mmp-cdn.rayjump.com/qatask/t10083/v8/m_en_badBoys_vGjb9z5wg_ios_ty/m_en_badBoys_vGjb9z5wg_ios_ty.html?preview=true&mw_test=0" },
    { name: "spiral", url: "https://mmp-cdn.rayjump.com/qatask/t11963/v4/m_zh-cn_spiral_Q9gOOH5k4_ios_ty/m_zh-cn_spiral_Q9gOOH5k4_ios_ty.html?preview=true&mw_test=0" },
    { name: "dig", url: "https://mmp-cdn.rayjump.com/qa_task/t7930/v3/m_zh-cn_dig_jvav0o5pz_ios_ty/m_zh-cn_dig_jvav0o5pz_ios_ty.html?preview=true&mw_test=0" },
    { name: "boy", url: "https://mmp-cdn.rayjump.com/qa_task/t8710/v1/m_en_blastBoy_N5g65s5r6_an_ty/m_en_blastBoy_N5g65s5r6_an_ty.html?preview=true&mw_test=0" },
    { name: "hop", url: "https://mmp-cdn.rayjump.com/qa_task/t6909/v1/m_en_tilesHop_pv0yl2_ios_sk/m_en_tilesHop_pv0yl2_ios_sk.html?preview=true&mw_test=0" },
    { name: "collect", url: "https://mmp-cdn.rayjump.com/qa_task/t7725/v1/m_ja_collectcubes_YUa79n5tf_ios_ty/m_ja_collectcubes_YUa79n5tf_ios_ty.html?preview=true&mw_test=0" },
    { name: "zombie", url: "https://mmp-cdn.rayjump.com/qa_task/t9318/v6/m_en_zombie_FbJcJv525_ios_ty/m_en_zombie_FbJcJv525_ios_ty.html?preview=true&mw_test=0" },
    { name: "door", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=https%3A%2F%2Fmmp-cdn.rayjump.com%2Fqatask%2Ft10870%2Fv7%2Fm_en_escape_MnEPCE5fa_ios_ty%2Fm_en_escape_MnEPCE5fa_ios_ty.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=Escape%20Door-%20brain%20puzzle%20game" },
    { name: "survivor", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=https%3A%2F%2Fmmp-cdn.rayjump.com%2Fqatask%2Ft11095%2Fv11%2Fm_en_one_dBcwdG5i1_ios_ty%2Fm_en_one_dBcwdG5i1_ios_ty.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=One%20Survivor" },
    { name: "park", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=https%3A%2F%2Fmmp-cdn.rayjump.com%2Fqatask%2Ft11884%2Fv1%2Fm_zh-cn_park_DKckYG5i4_ios_ty%2Fm_zh-cn_park_DKckYG5i4_ios_ty.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=Park%20Master%20%E3%80%9C%E5%81%9C%E8%BD%A6%E5%A4%A7%E5%B8%88%E3%80%9C" },
    { name: "knock", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=https%3A%2F%2Fmmp-cdn.rayjump.com%2Fqatask%2Ft12484%2Fv1%2Fm_zh-cn_knock_zllR8J5hc_an_ty%2Fm_zh-cn_knock_zllR8J5hc_an_ty.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=%E6%8A%8A%E5%AE%83%E4%BB%AC%E5%85%A8%E9%83%A8%E5%87%BB%E5%80%92" },
    { name: "wobble", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=https%3A%2F%2Fmmp-cdn.rayjump.com%2Fqatask%2Ft12767%2Fv4%2Fm_en_wobble_KpyZMJ5a7_ios_ty%2Fm_en_wobble_KpyZMJ5a7_ios_ty.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=Wobble%20Man" },
    { name: "hago", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=http%3A%2F%2Fpl.rayjump.com%2Fqa_task%2Ft863%2Fv5%2Fzombie_pizvym%2Fzombie_pizvym.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=HAGO%20-%20Bermain%20Dengan%20Teman%20Baru" },
    
    { name: "party1", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=http%3A%2F%2Fpl.rayjump.com%2Fqa_task%2Ft6811%2Fv3%2Fm_zh-cn_partyio_Ubxvyi5qf_ios_sk%2Fm_zh-cn_partyio_Ubxvyi5qf_ios_sk.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=Party.io&preview=true&mw_test=0" },
    { name: "run", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=http%3A%2F%2Fpl.rayjump.com%2Fqa_task%2Ft6628%2Fv1%2Frunrace3d_pu5ejk_m_en_ios_sk%2Frunrace3d_pu5ejk_m_en_ios_sk.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=Run%20Race%203D&preview=true&mw_test=0" },
    { name: "party2", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=https%3A%2F%2Fmmp-cdn.rayjump.com%2Fqa_task%2Ft7209%2Fv5%2Fm_zh-cn_partyio2_shIvCk599_ios_sk%2Fm_zh-cn_partyio2_shIvCk599_ios_sk.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=Party.io&preview=true&mw_test=0" },

    { name: "ship", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=https%3A%2F%2Fmmp-cdn.rayjump.com%2Fqa_task%2Ft4208%2Fv7%2FgalaxyShip_pope1s_m%2FgalaxyShip_pope1s_m.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=%E9%93%B6%E6%B2%B3%E6%88%98%E8%88%B0-%E7%AD%96%E7%95%A5%E6%88%98%E4%BA%89%E7%A7%B0%E9%9C%B8%E5%AE%87%E5%AE%99&preview=true&mw_test=0" },
    { name: "sumo", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=https%3A%2F%2Fmmp-cdn.rayjump.com%2Fqa_task%2Ft5594%2Fv6%2Fsumo_pszaid_m_zh-cn_an_ty%2Fsumo_pszaid_m_zh-cn_an_ty.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=Sumotori%20Sports%20-%202018%20%E6%9C%80%E6%9C%89%E8%B6%A3%E7%9A%84%E7%9B%B8%E6%89%91%E4%BC%91%E9%97%B2%E6%B8%B8%E6%88%8F%E5%90%88%E9%9B%86&preview=true&mw_test=0" },
    { name: "ship2", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=http%3A%2F%2Fpl.rayjump.com%2Fqa_task%2Ft4802%2Fv10%2FgalaxyShip_pr4qbs_m_zh-cn_ty%2FgalaxyShip_pr4qbs_m_zh-cn_ty.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=%E9%93%B6%E6%B2%B3%E6%88%98%E8%88%B0-%E7%AD%96%E7%95%A5%E6%88%98%E4%BA%89%E7%A7%B0%E9%9C%B8%E5%AE%87%E5%AE%99&preview=true&mw_test=0" },

    { name: "tank", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=https%3A%2F%2Fmmp-cdn.rayjump.com%2Fqa_task%2Ft5189%2Fv8%2FtankFPS_pr8cpj_m_zh-cn_ios_ty%2FtankFPS_pr8cpj_m_zh-cn_ios_ty.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=%E5%9D%A6%E5%85%8B%E8%BF%9B%E5%8C%96%E5%A4%A7%E4%BD%9C%E6%88%98&preview=true&mw_test=0" },
    { name: "tank2", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=http%3A%2F%2Fpl.rayjump.com%2Fqa_task%2Ft4422%2Fv6%2FfinalTank_ppbex2_m%2FfinalTank_ppbex2_m.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=%E5%9D%A6%E5%85%8B%E6%97%A0%E6%95%8C-3D%E5%9D%A6%E5%85%8B%E5%A4%A7%E6%88%98%E4%B8%80%E8%A7%A6%E5%8D%B3%E5%8F%91&preview=true&mw_test=0" },
    { name: "wist", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=https%3A%2F%2Fmmp-cdn.rayjump.com%2Fqa_task%2Ft5983%2Fv1%2Fshuaijiaocn_psxlqy_m_zh-cn_ios_ty%2Fshuaijiaocn_psxlqy_m_zh-cn_ios_ty.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=%E8%B6%A3%E5%91%B3%E6%91%94%E8%B7%A4%E4%B9%8B%E6%A0%BC%E6%96%97%E7%8E%8B%E8%80%85&preview=true&mw_test=0" },

    { name: "bricks", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=https%3A%2F%2Fmmp-cdn.rayjump.com%2Fqa_task%2Ft8160%2Fv5%2Fm_en_breakBricks_lGzPHp5o7_ios_ty%2Fm_en_breakBricks_lGzPHp5o7_ios_ty.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=%E7%A0%96%E5%9D%97%E7%A0%B4%E5%9D%8F%E8%80%85%20-%20%E7%89%A9%E7%90%86%E5%BC%B9%E7%90%83%E6%89%93%E7%A0%96%E5%9D%97%E6%B8%B8%E6%88%8F&preview=true&mw_test=0" },
    { name: "golf", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=http%3A%2F%2Fpl.rayjump.com%2Fqa_task%2Ft7930%2Fv3%2Fm_zh-cn_dig_jvav0o5pz_ios_ty%2Fm_zh-cn_dig_jvav0o5pz_ios_ty.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=Dig%20Your%20Way%20Out%20-%20Golf%20Nest&preview=true&mw_test=0" },
    { name: "pan", url: "http://playable-portal.mintegral.com/viewer/mindwork-view.html?url=https%3A%2F%2Fmmp-cdn.rayjump.com%2Fqa_task%2Ft4484%2Fv4%2Fpendulum_ppzhn4_m%2Fpendulum_ppzhn4_m.html%3Fpreview%3Dtrue%26vconsole%3D0%26mw_test%3D0&orientation=3&name=Pendulum%203D&preview=true&mw_test=0" },
]

var p = document.createElement('p');
p.align = "center";
document.body.appendChild(p);
for (var info of list) {
    var alink = document.createElement('a');
    alink.href = info.url;
    alink.target = "_blank";
    p.appendChild(alink);
    var img = document.createElement("img");
    img.src = `pl/${info.name}.png`;
    img.alt = info.name;
    img.width = 250;
    alink.appendChild(img);
}
