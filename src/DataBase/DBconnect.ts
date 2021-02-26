import MySql, { MysqlError } from "mysql";
// Это чтоб если я поменял днс имя или пароль, то мне не пришлось бы менять это везде


export class BaseConnect {
    // TODO: Невозможно разорвать соединение с базой данных из-за всех этих
    // вторичных перехватчиков ошибок,
    // мб нада найти ключ, чтоб когда я сам разрываю он срабатывал, или свой создать.
    public connection: MySql.Connection;

    constructor(db_name: string) {
        const databaseConfig = {
            host: "localhost",
            user: "root",
            database: "student",
            password: "root",
        };

        this.connect(databaseConfig);
    }

    private connect(databaseConfig: any) {
        this.connection = MySql.createConnection(databaseConfig);

        this.connection.connect(this.onconnect.bind(this));
        setInterval(this.anti_disconnect.bind(this), 5000);

        this.connection.on("error", this.handleError.bind(this));
    }

    private onconnect(err: MysqlError) {
        if (err) {
            console.log("error when connecting to db:", err);
            setTimeout(this.connect.bind(this), 2000);
        }
    }

    private anti_disconnect() {
        this.connection.query("SELECT 1");
    }

    private handleError(err: MysqlError) {
        console.log("db error", err);
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            this.connect.bind(this);
        } else {
            throw err;
        }
    }
}

const SmartCollege: MySql.Connection = new BaseConnect("smartcollege").connection;

export { SmartCollege };