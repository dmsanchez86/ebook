var _debug = $('debug');

var nIDNum = 0;
var arrID = [ 1, 2 ];
var arrFile = [ "1","2" ];
var nActiveIDIndex = 0;
var nActiveID = 0;

var timerPreview = 0;
var nIndexPreview = 0;
var nIndexPreviewLast = -1;
var nWidth = 0;
var nHeight = 0;
var nSpeed = 500;
var strYMD = "";
var strHour = "";
var strFolder="";
var nHomeFolder=1;

function Animate()
{
	if( nIDNum <=0 )return;
	
	var strDivName="";
	if( nIndexPreviewLast != -1 )
	{
		strDivName = "p" + nIndexPreviewLast.toString();
		document.getElementById(  strDivName ).style.visibility = 'hidden';		
	}	
	
	var nIndex = arrID[ nIndexPreview ] - 1;
	strDivName = "p" + nIndex.toString();
	document.getElementById(  strDivName ).style.visibility = 'visible';
	
	nIndexPreviewLast = nIndex;
	
	nIndexPreview++;
	if( nIndexPreview >= nIDNum ) nIndexPreview = 0;
	
	timerPreview=setTimeout("Animate()", nSpeed ); 
}

function StopAnimate()
{
	clearTimeout( timerPreview );
	timerPreview = 0;
}
/*
function SetFolderName( strDir )
{
	strFolder = strDir;
}*/

function SetFolderName( strDir1,  strDir2, strDir3 )
{
		strYMD = strDir1;
		strHour = strDir2;
		strFolder = strDir3;
}

function SetHomeFolder( nDir )
{
	nHomeFolder = nDir;
}

function GetFolderName()
{
	return strFolder;
}

function InitPreview()
{
	var i = 0;
	var strHTML = "";
	var dir_name = GetFolderName();
	
	var strWidth  = nWidth.toString();
	strWidth += "px";
	var strHeight = nHeight.toString();
	strHeight += "px";
	
	var strFolderFunny62 =	strFolder.substring( 0, 1 );
	
	 for( i=0; i<nIDNum; i++ )
	 {
	 	var strDivName = "p" + i.toString();
	 	
	 	var strImg0 ="";
	 	
	 	if( nHomeFolder== 1 )
	 		strImg0 = "http://gifmaker.me/files/download/home/" + strYMD + "/" +  strHour  + "/" + strFolder + "/" + arrFile[ i ];
		else if( nHomeFolder== 8 )
	 		strImg0 = "http://148.251.91.98/000/" + strYMD + "/" +  strHour  + "/" + strFolder + "/" + arrFile[ i ];
		else
			strImg0 = "http://gifmaker.me/files/download/funny/" + strFolderFunny62 + "/" + strFolder + "/" + arrFile[ i ];	 		

		strHTML += '<div id="'  + strDivName + '" class="preview" style="width:'+ strWidth +';height:' + strHeight +' ;">' + '<img src="' + strImg0 +' " style="margin:0;padding:0;border:0px;width:' + strWidth + ';height:' + strHeight + ';">' + '</div>';	
	}
	
	$( "preview_box" ).innerHTML = 	strHTML;
	$( "preview_box" ).style.width	=	strWidth;
	$( "preview_box" ).style.height	=	strHeight;
	
	
	 for( i=0; i<nIDNum; i++ )
	 {
	 	var k = i + 1;
		var strID = k.toString();
		var strDivName = "p" + i.toString();
		
	///	var strImg = "http://gifmaker.me/files/download/home/" + dir_name + "/" + arrFile[ i ];
	///	var strFilename = "url(" +  strImg + ")";
	///	document.getElementById(  strDivName ).style.background=strFilename;
		document.getElementById(  strDivName ).style.visibility = 'hidden';		
		
	}
}		
	
function Preview()
{
	StopAnimate();
	Animate();
}

function ResetImgNumber( n )
{
	arrID.length = n;	
	nIDNum = n;
}

function DisplayImages()
{							
		InitPreview();
		Preview();
}

function ReadFileName( strFileNameList )
{
	var nNum = arguments.length;
		
	if( nNum > 0 )
	{
		nIDNum = nNum;
		arrFile.length = nNum;

		for (var i = 0; i < nNum; i++)
		{
			arrFile[ i ]	= arguments[ i ];
		}
		
		ResetImgNumber( nNum );
	}
}

function ReadOrder( strOrder )
{
	var nNum = arguments.length;

	if( nNum > 0 )
	{
		if( nNum==nIDNum )
		{
			for (var i = 0; i < nNum; i++)
				arrID[ i ] = arguments[ i ];
		}
		else
		{
			for (var i = 0; i < nIDNum; i++)
				arrID[ i ] = i + 1;			
		}
	}
}

function ReadWHS( strWHS )
{
	var nNum = arguments.length;

	if( nNum ==3  )
	{
		nWidth 	= arguments[ 0 ];
		nHeight = arguments[ 1 ];
		nSpeed = arguments[ 2 ];
	}
}

function $(id)
{
    return document.getElementById(id);
}