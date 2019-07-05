#!/usr/bin/env bash
# 使用方法    ./gitlog.sh   起始日期    终止日期
# 时间格式： 2019-05-31
# 注：起始日期、终止日期，1、不传就是前一周；2、只传起始日期，就是起始日期到当天；
echo '----------------------------------------------------------------------------------------------------------------'
#设置当前年月日
TODAY=`date +%Y%m%d`
month=`date +%m`
day=`date +%d`
year=`date +%Y`
#字符转换称数字
month=`expr $month + 0`
#取前一天
day=`expr $day - 6`

#如果前一天为0，进行如下处理
if [ $day -eq 0 ]; then
  #取前一月月份.
  month=`expr $month - 1`
  #如果前一月为0，则取前一年，月份取第12月
  if [ $month -eq 0 ]; then
    month=12
    day=31
    year=`expr $year - 1`
  #如果前一月份不为零,则根据月份来判断该天是该月的第几天
  else
    case $month in
      1|3|5|7|8|10|12) day=31;;
      4|6|9|11) day=30;;
      2)
        if [ `expr $year % 4` -eq 0 ]; then
          if [ `expr $year % 400` -eq 0 ]; then
            day=29
          elif [ `expr $year % 100` -eq 0 ]; then
            day=28
          else
            day=29
          fi
        else
          day=28
        fi
      ;;
      esac
  fi
fi
#按照YYYYMMDD格式打印年日期
if [ $2 ]; then
    until_date=$2;
else
    until_date=$(date "+%Y-%m-%d");
fi

if [ $1 ]; then
    acct_date=$1;
else
   acct_date=`printf "%04d-%02d-%02d" "$year" "$month" "$day"`;
fi


echo $acct_date "~" $until_date;
echo "" > .txt.txt;
git log  --format='%aN' | sort -u | while read name;
do
echo -en "$name\t" >> .txt.txt;
git log --author="$name" --pretty=tformat:  --since ==$acct_date --until=$until_date --numstat | awk '{ add += $1; subs += $2; loc += $1 + $2 } END { if(loc > 0){printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc}else{printf "\n"} }' >> .txt.txt;
done

cat .txt.txt | sed -n '/^.\{40,\}/w .txt.txt'
sed 's/([^()]*)//g' .txt.txt;
rm -rf ./.txt.txt
echo '----------------------------------------------------------------------------------------------------------------'
