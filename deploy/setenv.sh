if [ ! -f ".env" ]; then
  touch .env
  {
    echo "MYSQL_USER=${MYSQL_USER}";
    echo "MYSQL_PASSWORD=${MYSQL_PASSWORD}";
    echo "MYSQL_DATABASE=${MYSQL_DATABASE}";
    echo "MYSQL_HOST=${MYSQL_HOST}";
    echo "MYSQL_PORT=${MYSQL_PORT}";
    echo "MYSQL_EXTERNAL_PORT=${MYSQL_EXTERNAL_PORT}";
    echo "";
    echo "HTTP_PORT=${HTTP_PORT}";
    echo "NGINX_PORT=${NGINX_PORT}";
    echo "";
    echo "KAKAO_CLIENT_ID=${KAKAO_CLIENT_ID}";
    echo "KAKAO_CLIENT_SECRET=${KAKAO_CLIENT_SECRET}";
    echo "KAKAO_REDIRECT_URL=${KAKAO_REDIRECT_URL}";
    echo "";
    echo "NAVER_CLIENT_ID=${NAVER_CLIENT_ID}";
    echo "NAVER_CLIENT_SECRET=${NAVER_CLIENT_SECRET}";
    echo "";
    echo "MM_ENDPOINT=${MM_ENDPOINT}";
    echo "MM_CHANNEL=${MM_CHANNEL}";
    echo "";
    echo "REDIS_HOST=${REDIS_HOST}";
    echo "REDIS_PORT=${REDIS_PORT}";
    echo "REDIS_USER=${REDIS_USER}";
    echo "REDIS_PASSWORD=${REDIS_PASSWORD}";
  } >> .env
fi
