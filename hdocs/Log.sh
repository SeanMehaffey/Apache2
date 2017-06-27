# This is a comment!
list="$(ls -l /opt/httpd/log/qa)"
echo "${list}"
while [ "$loop" != "n" ]
do
  echo "Server Name"
  read ServerName
  echo 'How many Lines'
  read lines
  errolog="$(tail -${lines} /opt/httpd/log/qa/${ServerName}/error_log)"
  echo "${errolog}"
  echo " "
  echo "check another Log? y/n"
  read loop
done
