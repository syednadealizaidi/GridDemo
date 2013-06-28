<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Website._Default" %>

<asp:Content runat="server" ID="FeaturedContent" ContentPlaceHolderID="FeaturedContent">
    <section class="featured">
        <div class="content-wrapper">
            <hgroup class="title">
                <h1><%: Title %>.</h1>
                <h2>Modify this template to jump-start your ASP.NET application.</h2>
            </hgroup>
            <p>
                To learn more about ASP.NET, visit <a href="http://asp.net" title="ASP.NET Website">http://asp.net</a>.
                The page features <mark>videos, tutorials, and samples</mark> to help you get the most from ASP.NET.
                If you have any questions about ASP.NET visit
                <a href="http://forums.asp.net/18.aspx" title="ASP.NET Forum">our forums</a>.
            </p>
        </div>
    </section>
</asp:Content>
<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    <%: Scripts.Render("~/bundles/KendoUI") %>
    <%: Styles.Render("~/bundles/KendoUIStyles") %>
    <script src="App_Scripts/DynamicGrid.js"></script>
    <script src="App_Scripts/App.js"></script>
    <div id="GridHere" data-model="Employees">
        <!--its easy to display inline then code -->
        <i style="display:none" data-field="FirstName" data-type="string" data-width="20%"><%=GetGlobalResourceObject("Demo","FirstName") %></i>
        <i style="display:none" data-field="LastName" data-type="string" data-width="20%"><%=GetGlobalResourceObject("Demo","LastName") %></i>
        <i style="display:none" data-field="Title" data-type="string" data-width="20%">Title</i>
        <i style="display:none" data-field="BirthDate" data-type="date" data-width="20%" data-format="MM/dd/yyyy">Birth Date</i>
        <i style="display:none" data-field="City" data-width="20%">City</i>
    </div>
</asp:Content>
