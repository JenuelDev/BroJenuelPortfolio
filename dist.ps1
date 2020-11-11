if (Test-Path .\..\BroJenuel) {
     if (Test-Path .\..\BroJenuel\dist) {
          Write-Host "Deleting Dist in BroJenuel..."
          Remove-Item ".\..\BroJenuel\dist" -Recurse -Force
     }
     Write-Host "Copyint Dist to BroJenuel...."
     Copy-Item -Path ".\dist" -Destination ".\..\BroJenuel" -Recurse -Force
} else {
     Write-Warning "Directory BroJenuel Doesnt Exist"
}