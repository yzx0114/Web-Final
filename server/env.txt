echo off
echo 'Setting up environment variables...'

REM set NODE_ENV=development

REM set PG_HOSTNAME=localhost
REM set PG_PORT=8060
REM set PG_USERNAME=postgres
REM set PG_DB_NAME=FinalDB

set NODE_ENV=production
set RDS_HOSTNAME=webapp.cvx4izpmwddz.us-west-2.rds.amazonaws.com
set RDS_USERNAME=master
set RDS_PASSWORD=Turtle053
set RDS_PORT=5432
set RDS_DB_NAME=FinalDB

echo 'Done'