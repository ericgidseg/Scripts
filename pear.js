[rewrite_local]
#Pear雪梨解锁会员
^https:\/\/(cn.youku-ca.com|bkcd\.b-cdn.net|souhu.mett.me|m.pearkin.com|www.baidu.com2.club)\/(api\/movie\/WatchMovieNew|api\/account\/IsVip|api\/account\/IndexDetail) url script-response-body http://ox.xmkczs.com/quantumultX/pear.js

[mitm]
hostname = bkcd.b-cdn.net,cn.youku-ca.com,souhu.mett.me,m.pearkin.com,www.baidu.com2.club
