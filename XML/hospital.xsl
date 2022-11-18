<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h1 align="center">Doctor Department Details</h1>
<table border="8" align="center" >

<tr bgcolor="#9acd32"> 
	<th>Name</th>
	<th>Age</th>
	<th>Department</th>
	<th>Years_experience</th>
	<th>Specialization</th>
	<th>salary</th>
	<th>charge</th>
	<th>city</th>
</tr>
	<xsl:for-each select="Doctor/s">
	<xsl:sort select="yearsexp/s"/>
	<xsl:if test="age &gt; 20">
	<xsl:choose>
        <xsl:when test="age &gt; 20">
		<td bgcolor="#ff00ff">
          <xsl:value-of select="age"/></td>
		 </xsl:when>
        <xsl:when test="age &gt; 30">
		<td bgcolor="#cccccc">
          <xsl:value-of select="age"/></td>
        </xsl:when>
        <xsl:otherwise>
          <td><xsl:value-of select="age"/></td>
        </xsl:otherwise>
      </xsl:choose>
<tr>
	<td><xsl:value-of select="name"/></td>
	<td><xsl:value-of select="age"/></td>
	<td><xsl:value-of select="Department"/></td>
	<td><xsl:value-of select="yearsexp"/></td>
	<td><xsl:value-of select="Specialization"/></td>
	<td><xsl:value-of select="salary"/></td>
	<td><xsl:value-of select="charge"/></td>
	<td><xsl:value-of select="city"/></td>
</tr>
	</xsl:if>
	</xsl:for-each>
	</table>
</body>
</html>
</xsl:template>

<xsl:template match="/">
  <html>
  <body>
  <h2>Doc Details</h2>  
  <xsl:apply-templates/>  
  </body>
  </html>
</xsl:template>

<xsl:template match="Doctor">
  <p>
    <xsl:apply-templates select="name"/>  
    <xsl:apply-templates select="Department"/>
  </p>
</xsl:template>

<xsl:template match="name">
  Name: <span style="color:#ff0000">
  <xsl:value-of select="."/></span>
  <br />
</xsl:template>

<xsl:template match="Department">
  Department: <span style="color:#00ff00">
  <xsl:value-of select="."/></span>
  <br />
</xsl:template>
</xsl:stylesheet>
