class CustomError extends Error 
{
    constructor(message)
    {
        super(message);
        this.name = "CustomError";
    }

};

function throwGenericError()
{
    throw new Error("Generic Error");
};

function throwCustomError()
{
    throw new CustomError("Custom Error");
};

try 
{
    console.log(`Force Generic error`);
    console.log(`Generic error try block`);

    err = throwGenericError();

} 
catch(err)
{
    console.log(`${err.message} catch block`);
    console.log(`Force ${err.message}`);
}
finally
{
    console.log(`Error: Generic error`)
    console.log(`Generic error finally block`);
}