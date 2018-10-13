export const isLeap = (input) =>
{
    var retVal = false;

    // If year can be divided by 4
    if( (input % 4) == 0)
    {
        // If year can not be divided by 100
        if( (input % 100) != 0)
        {
            // It's a leap year
            retVal = true;
        }
        else
        {
            // If year can not be divided by 400
            if( (input % 400) != 0 )
            {
                // It's a common year
                retVal = false
            }
            else
            {
                // It's a leap year
                retVal = true;
            }
        }
    }
    else
    {
        // It's a common year
        retVal = false;
    }

    return retVal;
}