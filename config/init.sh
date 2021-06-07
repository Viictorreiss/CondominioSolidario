docker exec -it db_condsolidario sh -c "mysql -u root -p1adf020b condsolidario < /home/app/database/condsolidario.sql"
docker exec -it db_condsolidario sh -c "mysql -u root -p1adf020b -e \"CREATE USER 'callegaz'@'%' IDENTIFIED BY '1adf020b';\""
docker exec -it db_condsolidario sh -c "mysql -u root -p1adf020b -e \"GRANT ALL ON *.* TO 'callegaz'@'%';\""
docker exec -it db_condsolidario sh -c "mysql -u root -p1adf020b -e \"flush privileges;\""