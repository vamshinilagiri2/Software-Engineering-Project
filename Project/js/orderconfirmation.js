const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const title = urlParams.get('title')
const tickets = urlParams.get('tickets')
const showtime = urlParams.get('showtime')
const showdate = urlParams.get('showdate')
const total = urlParams.get('total')
const resultGrid = document.getElementById('ticketconfirm');

function ticketconf() {
    resultGrid.innerHTML = `
    <tr>
    <td align="center"
        style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">

        
        <lord-icon src="https://cdn.lordicon.com/xxdqfhbi.json" trigger="loop"
            colors="primary:#121331,secondary:#ffc738,tertiary:#1e1e2a"
            style="width:200px;height:200px">
        </lord-icon><br>
        <h2
            style="font-size: 30px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
            Thank You For Booking!
        </h2>
    </td>
</tr>
<tr>
    <td align="left" style="padding-top: 20px;">
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
                <td width="75%" align="left" bgcolor="#ffb43a"
                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                    Booking Confirmation #
                </td>
                <td width="25%" align="left" bgcolor="#ffb43a"
                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                    2345678
                </td>
            </tr>
            <tr>
                <td width="75%" align="left"
                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">
                    Movie Name 
                </td>
                <td width="25%" align="left"
                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">
                    ${title}
                </td>
            </tr>
            <tr>
                <td width="75%" align="left"
                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                    Tickets 
                </td>
                <td width="25%" align="left"
                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                    x ${tickets}
                </td>
            </tr>
            <tr>
                <td width="75%" align="left"
                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                    Show date
                </td>
                <td width="25%" align="left"
                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                    ${showdate}
                </td>
            </tr>
            <tr>
                <td width="75%" align="left"
                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                    Show time
                </td>
                <td width="25%" align="left"
                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                    ${showtime}
                </td>
            </tr>
        </table>
    </td>
</tr>
<tr>
    <td align="left" style="padding-top: 20px;">
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
            <tr>
                <td width="75%" align="left"
                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;">
                    TOTAL
                </td>
                <td width="25%" align="left"
                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;">
                    ${total}
                </td>
            </tr>
        </table>
    </td>
</tr>
    
    `;

}
ticketconf();
