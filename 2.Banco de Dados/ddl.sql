CREATE DATABASE heroDB;

use heroDB;

create table tb_hero (
	id_super_heroi 	int primary key auto_increment,
    nm_super_heroi 	varchar(100),
    ds_super_poder 	varchar(200),
    bt_voa 			boolean
);

select * from tb_hero;